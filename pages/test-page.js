import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/thq-react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Future Markets Technician</title>
          <meta
            property="og:title"
            content="test-page - Future Markets Technician"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_x8x8lc) => (
            <>
              <h1>{context_x8x8lc?.name}</h1>
            </>
          )}
          initialData={props.contextX8x8lcProp}
          persistDataDuringLoading={true}
          key={props?.contextX8x8lcProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextX8x8lcProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        contextX8x8lcProp: contextX8x8lcProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
