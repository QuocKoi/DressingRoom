import React, { Fragment } from 'react'
import data from '../data/Data.json'
import { Button, Li, Ul } from '../JSS/component/NavTab';
import Product from './Product';

export default function NavTab() {
    const { navPills, tabPanes } = data;
    const renderTab = () => {
        return navPills.map((tab, index) => {
            let { type, showName } = tab;
            if (index == 0) {
                return <Li key={index} className="nav-item" role="presentation">
                    <Button className="nav-link active" id={`${type}-tab`} data-bs-toggle="tab" data-bs-target={`#${type}`} type="button" role="tab" >{showName}</Button>
                </Li>
            }
            return <Li key={index} className="nav-item" role="presentation">
                <Button className="nav-link" id={`${type}-tab`} data-bs-toggle="tab" data-bs-target={`#${type}`} type="button" role="tab" >{showName}</Button>
            </Li>
        })
    }
    const renderTabPane = () => {
        return Object.keys(tabPanes).map((key, index) => {
            if (index == 0) {
                return <div key={index} className="tab-pane fade show active" id={`${key}`} role="tabpanel" ><Product arrProduct={tabPanes[key]}></Product></div>
            }
            return <div key={index} className="tab-pane fade show" id={`${key}`} role="tabpanel" ><Product arrProduct={tabPanes[key]}></Product></div>
        })
    }
    return (
        <Fragment>
                <Ul className="nav nav-tabs" id="myTab" role="tablist">
                    {renderTab()}
                </Ul>
                <div className="tab-content" id="myTabContent">
                    {renderTabPane()}
                </div>
        </Fragment>
    )
}
