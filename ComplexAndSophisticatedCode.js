/* Filename: ComplexAndSophisticatedCode.js */

// This code is a comprehensive implementation of a data structure known as a "Trie".
// A Trie is a tree-like structure that is commonly used to store a large number of strings,
// providing efficient search, insertion, and deletion operations.

class TrieNode {
  constructor() {
    // Each Trie node represents a character
    // We initialize an empty object to store children nodes
    this.children = {};
    
    // A flag to indicate if this node represents the end of a word
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    // The root of the Trie structure
    this.root = new TrieNode();
  }
  
  // Insert a word into the Trie
  insert(word) {
    let currentNode = this.root;
    
    // Iterate through each character in the word
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      
      // If the character does not exist as a child node, create a new node
      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode();
      }
      
      // Move to the next node
      currentNode = currentNode.children[char];
    }
    
    // Mark the last character node as the end of a word
    currentNode.isWord = true;
  }
  
  // Search for a word in the Trie
  search(word) {
    let currentNode = this.root;
    
    // Iterate through each character in the word
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      
      // If the character does not exist as a child node, the word does not exist in the Trie
      if (!currentNode.children[char]) {
        return false;
      }
      
      // Move to the next node
      currentNode = currentNode.children[char];
    }
    
    // Return true only if the last character node represents the end of a word
    return currentNode.isWord;
  }
  
  // Remove a word from the Trie
  remove(word) {
    this._removeHelper(word, this.root, 0);
  }
  
  _removeHelper(word, currentNode, index) {
    if (index === word.length) {
      // We have reached the last character of the word, mark the node as not representing a word
      currentNode.isWord = false;
      
      // Check if the current node has any children nodes, return true if it does not, indicating that it can be safely removed
      return Object.keys(currentNode.children).length === 0;
    }
    
    const char = word[index];
    const nextNode = currentNode.children[char];
    
    if (!nextNode) {
      // If the current character does not exist as a child node, the word does not exist in the Trie
      return false;
    }
    
    const shouldDeleteNode = this._removeHelper(word, nextNode, index + 1);
    
    if (shouldDeleteNode) {
      // Delete the child node and remove it from the current node's children
      delete currentNode.children[char];
      
      // Check if the current node has any children nodes, return true if it does not, indicating that it can be safely removed
      return Object.keys(currentNode.children).length === 0;
    }
    
    return false;
  }
}

// Create a new Trie instance
const trie = new Trie();

// Insert words into the Trie
trie.insert("apple");
trie.insert("banana");
trie.insert("cat");
trie.insert("dog");
trie.insert("elephant");

// Search for a word in the Trie
console.log(trie.search("apple")); // Output: true
console.log(trie.search("banana")); // Output: true
console.log(trie.search("zebra")); // Output: false

// Remove a word from the Trie
trie.remove("banana");
console.log(trie.search("banana")); // Output: false

// Insert more words
trie.insert("zoo");
trie.insert("zone");

// Search again
console.log(trie.search("zoo")); // Output: true
console.log(trie.search("zone")); // Output: true

// Clean up the Trie
trie.remove("zoo");
trie.remove("zone");
console.log(trie.search("zoo")); // Output: false
console.log(trie.search("zone")); // Output: false

/* Note: The above code is a simplified demonstration of a Trie data structure. 
   In real-world scenarios, there would be additional methods and functionality specific to the use case. 
   The code can be further optimized and extended based on the specific requirements. */