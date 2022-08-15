import DashboardBar from "../../components/dashboard-bar"

const DesignPage = () => {
    return(
        <div className="design-page">
            <DashboardBar/>
            <div className="design-page-content">
                <img src={require("../../assets/images/portfolio.png")} alt=""/>
                <div className="design-page-buttons">
                    <button className="edit-btn">Edit</button>
                    <button className="preview-btn">Preview</button>
                    <button className="publish-btn">Publish</button>
                    <button className="delete-btn">Delete</button>
                </div>
            </div>
        </div>
    )
}
export default DesignPage;