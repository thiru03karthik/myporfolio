// src/app/dm-tools/schema-markup/page.tsx
"use client";

import { useState } from "react";
import { FaClipboard } from "react-icons/fa"; // Optional for Copy to Clipboard

const SchemaMarkupGenerator = () => {
  const [schemaType, setSchemaType] = useState("Article");
  const [jsonSchema, setJsonSchema] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [customFields, setCustomFields] = useState({
    headline: "",
    author: "",
    datePublished: "",
    description: "",
  });

  // Function to generate schema JSON based on type selected
  const generateSchema = (type: string) => {
    switch (type) {
      case "Article":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: customFields.headline || "Sample Article Headline",
          author: {
            "@type": "Person",
            name: customFields.author || "Jane Doe",
          },
          datePublished: customFields.datePublished || "2025-07-29",
          description: customFields.description || "This is a sample article used to demonstrate schema markup generation.",
        };
      case "FAQ":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: customFields.headline || "What is Schema Markup?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Schema markup is a form of microdata that helps search engines understand the content of your website.",
              },
            },
          ],
        };
      default:
        return {};
    }
  };

  const handleGenerateSchema = () => {
    setIsLoading(true);
    const schema = generateSchema(schemaType);
    setJsonSchema(JSON.stringify(schema, null, 2)); // Format the JSON with indentation
    setIsLoading(false);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(jsonSchema);
    alert("Schema copied to clipboard!");
  };

  // Handle custom input changes
  const handleCustomFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomFields({ ...customFields, [name]: value });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Navigation or Header can be added here */}
      <h1 className="text-3xl font-bold text-center mb-6">Schema Markup Generator</h1>

      <div className="space-y-4">
        {/* Schema Type Dropdown */}
        <div>
          <label htmlFor="schema-type" className="block text-sm font-medium">Select Schema Type:</label>
          <select
            id="schema-type"
            value={schemaType}
            onChange={(e) => setSchemaType(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Article">Article</option>
            <option value="FAQ">FAQ</option>
          </select>
        </div>

        {/* Custom Fields for Article */}
        {schemaType === "Article" && (
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium">Headline:</label>
              <input
                type="text"
                name="headline"
                value={customFields.headline}
                onChange={handleCustomFieldChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter headline"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Author:</label>
              <input
                type="text"
                name="author"
                value={customFields.author}
                onChange={handleCustomFieldChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter author name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Date Published:</label>
              <input
                type="date"
                name="datePublished"
                value={customFields.datePublished}
                onChange={handleCustomFieldChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Description:</label>
              <input
                type="text"
                name="description"
                value={customFields.description}
                onChange={handleCustomFieldChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter article description"
              />
            </div>
          </div>
        )}

        {/* Generate Schema Button */}
        <div>
          <button
            onClick={handleGenerateSchema}
            disabled={isLoading}
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isLoading ? "Generating..." : "Generate Schema"}
          </button>
        </div>
      </div>

      {/* Output JSON Schema */}
      {jsonSchema && (
        <div className="mt-6 space-y-4">
          <h2 className="text-xl font-semibold">Generated Schema JSON:</h2>
          <textarea
            className="w-full p-4 bg-gray-100 rounded-md overflow-x-auto h-48"
            value={jsonSchema}
            onChange={(e) => setJsonSchema(e.target.value)} // Allow modification of JSON
          ></textarea>

          <button
            onClick={handleCopyToClipboard}
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none"
          >
            <FaClipboard className="inline-block mr-2" />
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
};

export default SchemaMarkupGenerator;
