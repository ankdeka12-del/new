/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarUrl?: string;
  initials: string;
}

export interface WorkSample {
  id: string;
  title: string;
  videoUrl: string;
  description: string;
  tags: string[];
  category: string;
  features?: string[];
}
