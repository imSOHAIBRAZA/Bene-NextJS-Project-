import React, {Component} from 'react';
import Nav from "./nav"
import Head from "next/dist/next-server/lib/head";
class PageLayout extends Component {
  render() {
    return (
      <div>
         <Head>
          <title>Home</title>
          <link rel='icon' href='/favicon.ico' />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        </Head>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default PageLayout;