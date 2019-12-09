import { Directive, OnInit, HostBinding, ElementRef, HostListener, AfterViewInit, AfterContentInit } from '@angular/core';
import { isArray } from 'util';

@Directive({
  selector: '.appTableOverflow'
})
export class TableOverflowDirective implements OnInit, AfterViewInit, AfterContentInit {

  constructor(private elRef: ElementRef) { }
  table = this.elRef.nativeElement;
  tableHTML = ``;
  tableRow = ''
  tableTh = ''
  tableData = {
    thead: {
      tr: {
        0: {
          th: []
        }
      }
    }
  };





  ngOnInit() {

    // this.tableData.class = this.table.className;
    // // window.xxx = this.elRef.nativeElement.childNodes[0].childNodes[0].childNodes[0] ;
    // this.table.childNodes.forEach(element => {
    //   if (element.localName == 'thead') {
    //     // console.log(element.localName)
    //     element.childNodes.forEach((tr, trIndex) => {
    //       // console.log(tr.localName)
    //       // console.dir(tr.childNodes)
    //       // console.log(trIndex)
    //       this.tableData.thead.tr[trIndex] = [];
    //       tr.childNodes.forEach((th, thIndex) => {
    //         console.log(`row Index ${trIndex} th index is ${thIndex} th text is ${th.innerHTML} and its width is ${th.clientWidth}`)
    //         this.tableData.thead.tr[trIndex][thIndex] = {
    //           name: th.innerHTML,
    //           width: th.clientWidth,
    //           rowspan: th.rowSpan,
    //           colspan: th.colSpan

    //         };
    //         // console.log(`${th.innerHTML} => ${th.clientWidth} rowsapn = ${th.rowSpan} and colspan= ${th.colSpan}`);
    //       });
    //     });
    //   }

    // });

    // this.tableHTML = this.renderTable(this.tableData);
    // console.dir(xxx);
    // console.dir(xxx.clientWidth);
    // console.dir(xxx.offsetWidth);
    // // console.log(` main table  ${this.tableHTML}`);
    // // console.log(` main table row ${this.tableRow}`);
    // // console.log(this.tableData);
    // this.table.insertAdjacentHTML("beforebegin", this.tableHTML)
    // console.log('ngOnInit called');
  }




  ngAfterViewInit(){

    // console.log('ngAfterContentInit called');
  }




  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.

    console.log('ngAfterContentInit called');
    // this.tableData.class = this.table.className;
    // window.xxx = this.elRef.nativeElement.childNodes[0].childNodes[0].childNodes[0] ;
    // window.xxx = this.elRef.nativeElement.childNodes[0].childNodes[0].childNodes[0] ;
    this.table.childNodes.forEach(element => {
      if (element.localName == 'thead') {
        // console.log(element.localName)
        element.childNodes.forEach((tr, trIndex) => {
          // console.log(tr.localName)
          // console.dir(tr.childNodes)
          // console.log(trIndex)
          this.tableData.thead.tr[trIndex] = [];
          tr.childNodes.forEach((th, thIndex) => {
            console.log(`row Index ${trIndex} th index is ${thIndex} th text is ${th.innerHTML} and its width is ${th.clientWidth}`)
            this.tableData.thead.tr[trIndex][thIndex] = {
              name: th.innerHTML,
              width: th.clientWidth,
              rowspan: th.rowSpan,
              colspan: th.colSpan

            };
            // console.log(`${th.innerHTML} => ${th.clientWidth} rowsapn = ${th.rowSpan} and colspan= ${th.colSpan}`);
          });
        });
      }

    });

    this.tableHTML = this.renderTable(this.tableData);
    // console.dir(xxx);
    // console.dir(xxx.clientWidth);
    // console.dir(xxx.offsetWidth);
    // console.log(` main table  ${this.tableHTML}`);
    // console.log(` main table row ${this.tableRow}`);
    // console.log(this.tableData);
    this.table.insertAdjacentHTML("beforebegin", this.tableHTML)

  }


  renderTable(table: any) {
    // console.log(isArray(table))
    let tr = ``;
    let html = `<table class="${table.class}">
        <thead>
        {{tableRow}}
        </thead>
      </table>`;
    // console.log("table");
    tr = this.renderTableRow(table.thead.tr);
    // console.log(`table html ${tr}`);
    html = html.replace('{{tableRow}}', tr);
    return html;
  }


  renderTableRow(tableRow: any) {
    for (const key in tableRow) {
      if (tableRow.hasOwnProperty(key)) {
        const element = tableRow[key];
        this.tableRow += `<tr>
        ${this.renderTableTH(element)}
        </tr>
        `;
      }
    }
    return this.tableRow;
  }


  renderTableTH(th: any) {
    this.tableTh = ''
    for (const key in th) {
      if (th.hasOwnProperty(key)) {
        const element = th[key];
        // console.log(element)
        // console.log(`${element.name} => ${element.width} rowsapn = ${element.rowspan} and colspan= ${element.colspan}`);
        this.tableTh += `
        <th style="width:${element.width}px !important" colspan="${element.colspan}" rowspan="${element.rowspan}"> ${element.name} </th>`;
      }
    }
    return this.tableTh;
  }



  // @HostListener('click', ['$event']) addTableClone(event: Event) {

  //   const table = this.elRef.nativeElement;

  //   this.tableData.class = table.className;

  //   const tableHTML = '';


  //   table.childNodes.forEach(element => {
  //     if (element.localName == 'thead') {
  //       console.log(element.localName)
  //       element.childNodes.forEach((tr, trIndex) => {
  //         // console.log(tr.localName)
  //         // console.dir(tr.childNodes)
  //         // console.log(trIndex)
  //         this.tableData.thead.tr[trIndex] = {}
  //         tr.childNodes.forEach((th, thIndex) => {
  //           // console.log(`row Index ${trIndex} th index is ${thIndex} th text is ${th.innerHTML}`)
  //           this.tableData.thead.tr[trIndex][thIndex]   =  {
  //             [thIndex] : {
  //               name: th.innerHTML,
  //               width: th.clientWidth,
  //               rowSpan: th.rowSpan,
  //               colSpan: th.colSpan
  //             }
  //           }
  //            console.log(`${th.innerHTML} => ${th.clientWidth} rowsapn = ${th.rowSpan} and colspan= ${th.colSpan}`);

  //         })
  //       })
  //     }

  //   })
  //   renderTable(this.tableData)

  //   function renderTable(table: any) {
  //     console.log(table)
  //     return `
  //     <table class="${table.class}">
  //     <thead>
  //         ${renderTableRow(table.thead.tr)}
  //     </thead>
  //   </table>
  //     `

  //   }

  //   function renderTableTH(thdata: any) {
  //       return `<th></th>`;
  //   }
  //   function renderTableRow(tableRow: any) {

  //     console.log(table)
  //       // return `<tr></tr>`;
  //   }
  //   // console.log(this.tableData)

  //   // console.dir(table)
  //   // console.log(thead)
  //   // console.log(isArray(thead))

  //   // const data = thead.map((currentValue, index, arr) => {
  //   //   console.log(currentValue);
  //   //   console.log(index);
  //   //   console.log(arr);
  //   //   return currentValue ;
  //   // });


  //   // this.elRef.nativeElement.insertAdjacentHTML("beforebegin", "<p>My new paragraph</p>");
  // }
}
