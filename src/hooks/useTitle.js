const { useEffect } = require("react")

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Hussy News Portal`;
    }, [title])
}

export default useTitle;