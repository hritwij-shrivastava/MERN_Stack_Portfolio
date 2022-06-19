import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Categories extends Component {
    render() {
        return (
            <>
                <aside className="ps-widget ps-widget--categories">
                    <h4 className="ps-widget__heading"><span>Categories</span></h4>
                    <div className="ps-widget__content">
                        <ul className="ps-list">
                            <li>
                                <Link to="#">All <span>50</span></Link></li>
                            <li>
                                <Link to="#">Travel <span>12</span></Link></li>
                            <li>
                                <Link to="#">Lifestyle <span>20</span></Link></li>
                            <li>
                                <Link to="#">Design <span>18</span></Link></li>
                            <li>
                                <Link to="#">Others <span>10</span></Link></li>
                        </ul>
                    </div>
                </aside>
            </>
        )
    }
}
