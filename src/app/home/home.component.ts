import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import { ItemEventData, ListView } from "tns-core-modules/ui/list-view/list-view";
import { SearchBar } from "tns-core-modules/ui/search-bar";

import { EventData, fromObject } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";


@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    routerExtensions: any;
 
    constructor() {
        // Use the component constructor to inject providers.
    }

    countries: { name: string, imageSrc: string }[] = [
        { name: "Australia", imageSrc: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-512.png" },
        { name: "Belgium", imageSrc: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-512.png" },
        { name: "Bulgaria", imageSrc: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-512.png" },
        { name: "Canada", imageSrc: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-512.png" },
        { name: "Switzerland", imageSrc: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-512.png" },
        { name: "China", imageSrc: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-512.png" },
        { name: "Czech Republic", imageSrc: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-512.png" },
        { name: "Germany", imageSrc: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-512.png" },
        { name: "Spain", imageSrc: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-512.png" },
        { name: "Ethiopia", imageSrc: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-512.png" },
        { name: "Croatia", imageSrc: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-512.png" },
        { name: "Hungary", imageSrc: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-512.png" },
        { name: "Italy", imageSrc: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-512.png" },
        { name: "Jamaica", imageSrc: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-512.png" },
        { name: "Romania", imageSrc: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-512.png" },
        { name: "Russia", imageSrc: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-512.png" },
        { name: "United States", imageSrc: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-512.png" },
    ];

    private getSegmentedBarItems = () => {
        let segmentedBarItem1 = new SegmentedBarItem();
        segmentedBarItem1.title = "Item 1";
        let segmentedBarItem2 = new SegmentedBarItem();
        segmentedBarItem2.title = "Item 2";
        let segmentedBarItem3 = new SegmentedBarItem();
        segmentedBarItem3.title = "Item 3";
        // segmentedBarItem3.row

        return [segmentedBarItem1, segmentedBarItem2, segmentedBarItem3];
    }
    segmentedBarItems: Array<SegmentedBarItem> = this.getSegmentedBarItems();
    selectedBarIndex: number = 0;


    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    searchPhrase: string;

    onSubmit(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Searching for ${searchBar.text}`);
    }

    onTextChanged(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Input changed! New value: ${searchBar.text}`);
    }

    onClear(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Clear event raised`);
    }

}
