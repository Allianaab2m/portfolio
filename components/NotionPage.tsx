import * as React from 'react'
import Head from 'next/head'

import { NotionRenderer } from 'react-notion-x'
import { ExtendedRecordMap } from 'notion-types'
import { getPageTitle } from 'notion-utils'

type PageProps = {
    recordMap: ExtendedRecordMap
    rootPageId?: string
}

export const NotionPage = ({ recordMap, rootPageId }: PageProps) => {
  if (!recordMap) {
    return null
  }

  const title = getPageTitle(recordMap)
  console.log(title, recordMap)

  return (
    <>
      <Head>
        <meta name="Blogs" content='My Blogs'/>
      </Head>

      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={true} rootPageId={rootPageId}/> 
    </>
  )
}

