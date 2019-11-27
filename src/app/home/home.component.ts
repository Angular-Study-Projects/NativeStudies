import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import { SearchBar } from "tns-core-modules/ui/search-bar";



@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    routerExtensions: any;
 
    constructor() {
        // Use the component constructor to inject providers.
    }

    countries: { name: string, date: string ,imageSrc: string }[] = [
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
        { name: this.pickFolderName((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), date: this.pickFolderChangeDate((Math.floor(Math.random() * (10 - 0 + 1)) + 0)), imageSrc: "res://folder" },
    ];

    private getSegmentedBarItems = () => {
        let segmentedBarItem1 = new SegmentedBarItem();
        segmentedBarItem1.title = "MINHAS PASTAS";
        let segmentedBarItem2 = new SegmentedBarItem();
        segmentedBarItem2.title = "COMPARTILHAR ESSA PASTA";
        let segmentedBarItem3 = new SegmentedBarItem();
        segmentedBarItem3.title = "ADICIONAR PASTA";

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


    pickFolderName(number: number): string {
        switch(number) {
          case 1:
            return 'Alagoas';
          break;
          case 2:
            return 'Maranhao';
          break;
          case 3:
            return 'nomeextremamentegrandeparatestararquivosabsurdosqueousuariopodetalvezcolocarpqsimneh';
          break;
          case 4:
            return 'Mossoro';
          break;
          case 5:
            return 'Florianopolis';
          break;
          case 6:
            return 'Pesquisas';
          break;
          case 7:
            return 'UFRN';
          break;
          case 8:
            return 'Saidinhas';
          break;
          case 9:
            return 'BotaDentroUFRN';
          break;
          case 10:
            return 'BotaForaUFRN';
          break;
          default: 
            return 'Just Folder With A Big A** Name To Test';
          break;
        }
      }

      pickFolderChangeDate(number: number): string {
        switch(number) {
          case 1:
            return 'Nov 12, 2018, 11:18:55 AM';
          break;
          case 2:
            return 'Nov 6, 2019, 00:18:55 AM';
          break;
          case 3:
            return 'Oct 6, 2019, 11:18:55 AM';
          break;
          case 4:
            return 'Set 26, 2019, 6:50:55 AM';
          break;
          case 5:
            return 'Jan 16, 2019, 12:48:55 AM';
          break;
          case 6:
            return 'Nov 25, 2019, 11:38:55 AM';
          break;
          case 7:
            return 'Nov 1, 2019, 1:18:55 AM';
          break;
          default: 
            return 'Nov 30, 2019, 21:18:55 AM';
          break;
        }
      }

}
