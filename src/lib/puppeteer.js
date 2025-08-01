// src/lib/puppeteer.js

import puppeteer from 'puppeteer';

// Function to get performance metrics using Puppeteer
export async function getPerformanceMetrics(url) {
  const browser = await puppeteer.launch({ headless: true });  // Launch headless browser
  const page = await browser.newPage();  // Open a new page in the browser

  await page.goto(url, { waitUntil: 'load', timeout: 0 });  // Navigate to the given URL

  // Get Core Web Vitals (Performance Metrics)
  const metrics = await page.evaluate(() => {
    return {
      LCP: window.performance.getEntriesByName('largest-contentful-paint')[0]?.startTime || 0,
      FID: window.performance.getEntriesByName('first-input')[0]?.startTime || 0,
      CLS: window.performance.getEntriesByName('layout-shift')[0]?.value || 0,
    };
  });

  await browser.close();  // Close the browser instance

  return metrics;  // Return the performance metrics (LCP, FID, CLS)
}
