// src/app/dm-tools/site-audit/api/check-url/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';
import { checkMetaTags, checkRobotsTxt, checkAltText, checkCanonicalTag } from 'lib/seo/seoUtils';  // Correct relative path to seoUtils
import { getPerformanceMetrics } from 'lib/puppeteer';  // Correct relative path to puppeteer.js

export async function POST(request: Request) {
  const { url } = await request.json();  // Extract the URL from the POST request body

  try {
    console.log('Fetching URL:', url);  // Log the URL we're trying to fetch

    // Fetch the website content using axios
    const response = await axios.get(url);
    const html = response.data;  // Get the raw HTML content

    // Perform SEO checks
    const seoResults = await performSeoChecks(html, url);
    const performanceResults = await getPerformanceMetrics(url);  // Performance check using Puppeteer

    return NextResponse.json({ success: true, seoResults, performanceResults });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
      return NextResponse.json(
        { success: false, message: 'Failed to fetch the website', error: error.message },
        { status: 500 }
      );
    }
    console.error('Unknown error:', error);
    return NextResponse.json(
      { success: false, message: 'Unknown error occurred', error: 'Unknown error' },
      { status: 500 }
    );
  }
}

// Perform SEO checks (meta tags, canonical, robots.txt, etc.)
async function performSeoChecks(html: string, url: string) {
  const result: any = {};

  // Meta tags and SEO content
  const metaTags = await checkMetaTags(html);
  const robots = await checkRobotsTxt(url);
  const altTextResults = await checkAltText(html);
  const canonical = await checkCanonicalTag(html);

  result.metaTags = metaTags;
  result.robots = robots;
  result.altTextResults = altTextResults;
  result.canonical = canonical;

  return result;
}
