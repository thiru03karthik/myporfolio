// src/lib/seo/seoUtils.ts

import axios from 'axios';
import * as cheerio from 'cheerio';  // For parsing HTML and extracting SEO-related data

// Function to check the robots.txt file
export async function checkRobotsTxt(url: string) {
  const robotsUrl = `${url}/robots.txt`;
  try {
    const response = await axios.get(robotsUrl);
    if (response.status === 200) {
      return { success: true, robots: response.data };
    }
    return { success: false, message: 'robots.txt not found' };
  } catch (error) {
    return { success: false, message: 'Failed to fetch robots.txt' };
  }
}

// Function to check for SEO meta tags like title and description
export async function checkMetaTags(html: string) {
  const $ = cheerio.load(html);
  const title = $('title').text() || 'No title found';
  const description = $('meta[name="description"]').attr('content') || 'No description found';
  const keywords = $('meta[name="keywords"]').attr('content') || 'No keywords found';

  return { title, description, keywords };
}

// Function to check for alt text in images
export async function checkAltText(html: string) {
  const $ = cheerio.load(html);
  const images = $('img');
  let missingAltCount = 0;

  images.each((index, image) => {
    const alt = $(image).attr('alt');
    if (!alt) missingAltCount++;
  });

  return { missingAltCount, totalImages: images.length };
}

// Function to check if the page has a canonical tag
export async function checkCanonicalTag(html: string) {
  const $ = cheerio.load(html);
  const canonical = $('link[rel="canonical"]').attr('href');
  return canonical || 'No canonical tag found';
}
