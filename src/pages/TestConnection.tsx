import React, { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TestConnection: React.FC = () => {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const runTests = async () => {
    setLoading(true);
    const testResults: any[] = [];

    // Test 1: Check Supabase URL
    testResults.push({
      test: "Supabase URL Configuration",
      status: "info",
      message: `URL: https://coflowvqtsacmwxhqwpv.supabase.co`
    });

    // Test 2: Try to connect to Supabase
    try {
      const { data, error } = await supabase.from('contact_submissions').select('count');

      if (error) {
        testResults.push({
          test: "Database Connection",
          status: "error",
          message: `Error: ${error.message}`,
          details: JSON.stringify(error, null, 2)
        });

        // Check specific error types
        if (error.message.includes('relation') || error.message.includes('does not exist')) {
          testResults.push({
            test: "Table Check",
            status: "error",
            message: "❌ Table 'contact_submissions' does not exist!",
            action: "You need to run QUICK_DATABASE_SETUP.sql in Supabase SQL Editor"
          });
        }
      } else {
        testResults.push({
          test: "Database Connection",
          status: "success",
          message: "✅ Connected to Supabase successfully!"
        });
        testResults.push({
          test: "Table Check",
          status: "success",
          message: `✅ Table 'contact_submissions' exists! Current rows: ${data?.[0]?.count || 0}`
        });
      }
    } catch (err: any) {
      testResults.push({
        test: "Database Connection",
        status: "error",
        message: `Network Error: ${err.message}`,
        details: "This could be a CORS issue or network connectivity problem"
      });
    }

    // Test 3: Try to insert a test record
    try {
      const testData = {
        name: "Test User",
        email: "test@example.com",
        message: "This is a test submission from connection test page",
        status: 'new',
        priority: 'normal'
      };

      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([testData])
        .select();

      if (error) {
        testResults.push({
          test: "Insert Test",
          status: "error",
          message: `Failed to insert: ${error.message}`,
          details: JSON.stringify(error, null, 2)
        });
      } else {
        testResults.push({
          test: "Insert Test",
          status: "success",
          message: "✅ Successfully inserted test record!",
          details: `Inserted ID: ${data?.[0]?.id}`
        });
      }
    } catch (err: any) {
      testResults.push({
        test: "Insert Test",
        status: "error",
        message: `Insert failed: ${err.message}`
      });
    }

    // Test 4: Check RLS policies
    testResults.push({
      test: "RLS Policy Check",
      status: "info",
      message: "If insert worked, RLS policies are configured correctly"
    });

    setResults(testResults);
    setLoading(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-50 border-green-200 text-green-900';
      case 'error': return 'bg-red-50 border-red-200 text-red-900';
      default: return 'bg-blue-50 border-blue-200 text-blue-900';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return '✅';
      case 'error': return '❌';
      default: return 'ℹ️';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Supabase Connection Test</CardTitle>
            <p className="text-gray-600">This page tests your database connection and configuration</p>
          </CardHeader>
          <CardContent>
            <Button
              onClick={runTests}
              disabled={loading}
              className="mb-6 bg-blue-600 hover:bg-blue-700"
            >
              {loading ? 'Running Tests...' : 'Run Connection Tests'}
            </Button>

            {results.length > 0 && (
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className={`p-4 border rounded-lg ${getStatusColor(result.status)}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{getStatusIcon(result.status)}</span>
                      <div className="flex-1">
                        <h3 className="font-bold mb-1">{result.test}</h3>
                        <p className="mb-2">{result.message}</p>
                        {result.action && (
                          <div className="bg-white/50 p-3 rounded mt-2 border border-orange-300">
                            <strong>Action Required:</strong> {result.action}
                          </div>
                        )}
                        {result.details && (
                          <details className="mt-2">
                            <summary className="cursor-pointer text-sm font-medium">View Details</summary>
                            <pre className="mt-2 p-2 bg-white/50 rounded text-xs overflow-auto">
                              {result.details}
                            </pre>
                          </details>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <h4 className="font-bold mb-2">Next Steps:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✅ If all tests pass: Your database is set up correctly!</li>
                    <li>❌ If "Table does not exist": Run QUICK_DATABASE_SETUP.sql in Supabase SQL Editor</li>
                    <li>❌ If "Network Error": Check your internet connection and Supabase status</li>
                    <li>❌ If "Permission denied": Check RLS policies in Supabase</li>
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Quick Setup Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 text-sm">
              <li className="flex gap-2">
                <span className="font-bold">1.</span>
                <span>Go to <a href="https://supabase.com/dashboard/project/coflowvqtsacmwxhqwpv" target="_blank" className="text-blue-600 underline">Supabase Dashboard</a></span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">2.</span>
                <span>Click "SQL Editor" in the left sidebar</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">3.</span>
                <span>Copy content from QUICK_DATABASE_SETUP.sql file</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">4.</span>
                <span>Paste and click "Run"</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">5.</span>
                <span>Come back here and click "Run Connection Tests" again</span>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TestConnection;
