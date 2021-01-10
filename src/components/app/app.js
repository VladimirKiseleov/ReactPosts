import React from 'react'

import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import PostStatusFilter from '../post-status-filter/post-status-filter'
import PostList from '../post-list/post-list'
import PostAddForm from '../post-add-form/post-add-form'

import './app.css'

const App = () => {
  const data = [
    { label: 'Going to learn React', important: true, id: 'saafas' },
    { label: 'Hello World', important: true, id: 'safas' },
    { label: 'That is so good', important: false, id: 'asfasf' },
    { label: 'I need more info about React', important: false, id: 'weasdas' },
  ]
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  )
}

export default App
