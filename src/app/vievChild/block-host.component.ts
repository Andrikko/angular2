import { Component,ViewChild,ViewChildren, QueryList } from "@angular/core";
import { BlockComponent } from "./block.component";

@Component({
    moduleId: module.id,
    selector: 'block-host',
    templateUrl: 'block-host.component.html'
})
export class BlockHostComponent {
    // VievChild
    // @ViewChild(BlockComponent)
    // block: BlockComponent;

    // showBlock(){
    //     this.block.show();
    // }


    VievChildren
    @ViewChildren(BlockComponent)
    blocks: QueryList<BlockComponent>;

    showAll(){
        this.blocks.forEach(x=>x.show());
    }
}