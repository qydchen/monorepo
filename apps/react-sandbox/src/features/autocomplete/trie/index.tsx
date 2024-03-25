class TrieNode {
  key: string | null;
  parent: TrieNode | null;
  children: Record<string, TrieNode>;
  isEnd: boolean;

  constructor(key: string | null) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.isEnd = false;
  }

  get word() {
    let out = "";
    let curr: TrieNode = this;
    while (curr.parent != null) {
      out = curr.key + out;
      curr = curr.parent;
    }
    return out;
  }
}

export class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode(null);
  }

  // insert a word into trie
  // O(k) k = word.length;
  insert(word: string) {
    let curr = this.root;
    for (let c of word) {
      if (!(c in curr.children)) {
        const node = new TrieNode(c);
        node.parent = curr;
        curr.children[c] = node;
      }
      curr = curr.children[c];
    }
    curr.isEnd = true;
  }
  // check if it contains a whole word
  // O(k) k = word.length;
  contains(word: string) {
    let curr = this.root;
    for (let c of word) {
      if (!(c in curr.children)) {
        return false;
      }
      curr = curr.children[c];
    }
    return curr.isEnd;
  }
  // returns every word with given prefix
  // O(p + n), p = prefix.length, n = number of child paths
  find(prefix: string) {
    let curr = this.root;
    let out: string[] = [];
    for (let c of prefix) {
      if (!(c in curr.children)) {
        return out;
      }
      curr = curr.children[c];
    }
    this.findAllWords(curr, out);
    return out;
  }

  findAllWords(node: TrieNode, out: Array<string> = []) {
    if (node.isEnd) {
      out.push(node.word);
    }
    for (let child in node.children) {
      const childNode = node.children[child];
      this.findAllWords(childNode, out);
    }
  }
}
