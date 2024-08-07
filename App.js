const parent=React.createElement('div',{id:"parent"},[
    React.createElement('div',{id:"child1"},[
        React.createElement('h1',{},"head1"),
        React.createElement('h1',{className:"head"},"head2")
    ]),
    React.createElement('div',{id:"child2"},[
        React.createElement('h1',{},"head3"),
        React.createElement('h1',{className:"head"},"head4")
    ])
])
console.log(parent)
 const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(parent);