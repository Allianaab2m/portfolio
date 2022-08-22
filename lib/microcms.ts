import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: 'ab2m',
  apiKey: process.env.MICROCMS_API_KEY || ''
})
