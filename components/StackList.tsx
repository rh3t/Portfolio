// Component
const StackList = ({padding, size}: {padding: number, size: number}) => {
    return (

        <div className = 'flex-center' style = {{gap: padding, fontSize: 25}}>
            {'>'}
            <img src = '/icons/html.svg' width = {size}/>
            <img src = '/icons/css.svg' width = {size}/>
            <img src = '/icons/typescript.svg' width = {size}/>
            <img src = '/icons/next-js.svg' width = {size}/>
            <img src = '/icons/nodejs.svg' width = {size}/>
            <img src = '/icons/react.svg' width = {size}/>
            <img src = '/icons/secure.svg' width = {size}/>
            {'<'}
        </div>

    )
}

// Export
export default StackList;