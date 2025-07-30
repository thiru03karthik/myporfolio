// src/app/api/check-url/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';  // Axios to fetch the website content
import { parse } from 'node-html-parser';  // Parse the HTML content for SEO checks

export async function POST(request: Request) {
  const { url } = await request.json();  // Extract the URL from the POST request body

  try {
    // Fetch the website content using axios
    const response = await axios.get(url);
    const html = response.data;  // Get the raw HTML content from the response

    // Perform SEO checks
    const checks = await performSeoChecks(html, url);

    // Return the result as JSON to the frontend
    return NextResponse.json({ success: true, checks });
  } catch (error) {
    // If there is an error, return a failure response
    console.error('Error fetching URL:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch URL' }, { status: 500 });
  }
}

// Function to perform SEO checks (e.g., HTTPS, robots.txt, title tag, etc.)
async function performSeoChecks(html: string, url: string) {
  const result: any = {};

  // Example of Technical SEO check: Check for HTTPS in the URL
  result.technicalSeo = await checkTechnicalSeo(url);

  // Example of On-Page SEO check: Extract the title tag from HTML
  result.onPageSeo = await checkOnPageSeo(html);

  // Placeholder: You can replace with actual performance checks (e.g., Google PageSpeed Insights)
  result.performance = await checkPerformance(url);

  // Placeholder: Check if Google Analytics or other SEO tools are present
  result.analytics = await checkAnalytics(url);

  return result;
}

async function checkTechnicalSeo(url: string) {
  const isHttps = url.startsWith('https://');
  return { https: isHttps, robotsTxt: 'https://example.com/robots.txt' };  // Example robots.txt link
}

async function checkOnPageSeo(html: string) {
  const root = parse(html);  // Parse the HTML
  const title = root.querySelector('title')?.textContent || 'No title found';
  return { title };
}

async function checkPerformance(url: string) {
  return { score: 85 };  // Dummy performance score
}

async function checkAnalytics(url: string) {
  return { googleAnalytics: 'UA-XXXXX-Y' };  // Dummy Google Analytics ID
}
