import React, { Component, Fragment } from 'react'

export default class PostNewArticle extends Component {
  render() {
    const {user} = this.props
    return (
      <div>
       {user === '' ? <Fragment>
         <p>You must sign-in before you can post an article.</p>

       </Fragment> :
      <p></p>
      //Form for uploading an article will go below
      }
      </div>
    )
  }
}
