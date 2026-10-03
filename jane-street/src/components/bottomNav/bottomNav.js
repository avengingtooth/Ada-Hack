import "./bottomNav.css"

function BottomNav(curPage){
    const pages = [["Home", "/"], ["Recording", "/record"]]
    return(
        <div id="bottomNav">
            {
                pages.map(page => {
                    return <a href={page[1]}>{page[0]}</a>
                })
            }
        </div>
    )
}

export default BottomNav