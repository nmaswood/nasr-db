const HEADER = 4;

const BTREE_PAGE_SIZE = 4096;
const BTREE_MAX_KEY_SIZE = 1000;
const BTREE_MAX_VAL_SIZE = 3000;

interface BNode {
  date: Buffer;
}

const enum BNodeFlags {
  BNODE_NODE = 1,
  BNODE_LEFT = 2,
}

//type BTree struct {
//// pointer (a nonzero page number)
//root uint64
//// callbacks for managing on-disk pages
//get func(uint64) BNode // dereference a pointer
//new func(BNode) uint64 // allocate a new page
//del func(uint64)       // deallocate a page
//}
//
//

class BTree {
  pointer: number;
  root: number;

  //get func(uint64) BNode // dereference a pointer
  //new func(BNode) uint64 // allocate a new page
  //del func(uint64)       // deallocate a page
  deref(v: number): BNode {
    throw new Error("not implemented");
  }

  allocatePage(node: BNode): number {
    throw new Error("not implemented");
  }

  deallocatePage(v: BNode): void {
    throw new Error("not implemented");
  }
}
