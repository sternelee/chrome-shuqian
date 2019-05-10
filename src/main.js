import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bookmarks: null
        }
    }
    componentWillMount() {
        console.log(chrome.bookmarks)
        // chrome.bookmarks.getTree(bookmarkArray => {
        //     // 方法无效
        //     this.setState({
        //         bookmarks: bookmarkArray
        //     })
        // });
    }
    render() {
        const { bookmarks } = this.state
        return (
            <div>
                <h2>Your App injected to DOM correctly!</h2>
                <div>{ bookmarks }</div>
            </div>
        )
    }
}

chrome.runtime.onMessage.addListener((request, sender, response) => {
    if (request.injectApp) {
        injectApp();
        response({
            startedExtension: true
        })
    }
})

function injectApp() {
    const newDiv = document.createElement('div')
    newDiv.setAttribute('id', 'chromeExtensionReactApp')
    document.body.appendChild(newDiv)
    ReactDOM.render(<App />, newDiv)
}