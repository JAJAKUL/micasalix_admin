import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    child: any;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon:'nc-bank', class: '', child:'' },
    // { path: '/event-list', title: 'Events', icon:'nc-note-03', class: '', child:''}, 
    { path: '/user-list', title: 'User List', icon:'nc-single-02', class: '', child: [{path:'/user-details',title:'User Details'},{ path:'/edit-user', title:'Edit User' },{path:'/create-user', title:'Create User'}] },
    { path: '/agent-list', title: 'Agent List', icon:'nc-circle-10', class: '', child: [{ path:'/edit-agent', title: 'Edit Agent'},{ path: '/create-agent', title: 'Create Agent'}] },
    { path: '/agent-type-list', title: 'Agent Type List', icon:'nc-single-copy-04', class: '', child: [{path:'/create-agent-type',title:'Create Agent Type'}, {path:'/edit-agent-type',title:'Edit Agent Type'}]},
    { path: '/property-category-list', title: 'Property Category List', icon:'nc-basket', class: '', child: [{path:'/create-property-category',title:'Create Property Category'},{path:'/edit-property-category', title:"Edit Property Category"}]},
    { path: '/sub-agent-type-list', title: 'Sub Agent Type List', icon:'nc-paper', class: '', child: [{path:'/create-sub-agent-type',title:'Create Sub Agent Type'}, {path:'/edit-sub-agent-type',title:'Edit Sub Agent Type'}]},
    { path: '/property-type-list', title: 'Property Type List', icon: 'nc-box-2', class: '', child: [{path:'/create-property-type',title:'Create Property Type'},{path:'/edit-property-type', title:"Edit Property type"}]},
    { path: '/news-list', title: 'News List', icon:'nc-caps-small', class: '', child: [{ path:'/edit-news', title: 'Edit News'},{ path: '/create-news', title: 'Create News'}] },

];



@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
