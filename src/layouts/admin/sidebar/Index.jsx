import React, { useRef, useState } from 'react';
import './Sidebar.css';
import ItemControl from './items/ItemControl';
import { cart, community, connections, dashboard, shop } from './items/ItemInits';
import Items from './Items';
import Info from './Info';
const Index = () => {


    return (
        <aside className="sidebar pr-0 ">
            <div className="sidebar-inner" dir="rtl">
                <div className="sidebar-inner-2 pr-2" dir="rtl">

                    {/* info */}
                    <Info/>

                    {/* items */}
                    <Items/>
                
                </div>
            </div>
        </aside>
    );
};

export default Index;
