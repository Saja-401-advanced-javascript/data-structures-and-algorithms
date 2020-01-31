'use strict'

const LinkedList = require('./lib/linked-list.js')

let ll = new LinkedList();

describe('Linked List', () => {

    beforeEach(() => {
        ll = new LinkedList()
    });

    it('Can successfully instantiate an empty linked list', () => {
        expect(ll.head).toBeNull()
    });

    it('Can properly insert into the linked list', () => {
        ll.insert(5)
        expect(ll.head.value).toEqual(5)
    });

    it('The head property will properly point to the first node in the linked list', () => {
        ll.insert('this is the head'); /// this is the first node in the linked list
        ll.insert(3);
        ll.insert(6);
        expect(ll.head.value).toEqual('this is the head')
    });

    it('Can properly insert multiple nodes into the linked list', () => {
        ll.insert(1); /// this is the first node in the linked list
        ll.insert(2);
        ll.insert(3);
        expect(typeof ll.head.next).toMatch('object')
    });

    it('Will return true when finding a value within the linked list that exists', () => {
        ll.insert('foo'); /// this is the first node in the linked list
        ll.insert('fuzz');
        ll.insert('buzz');
        expect(ll.includes('fuzz')).toBeTruthy()
    });

    it('Will return false when searching for a value in the linked list that does not exist', () => {
        ll.insert('foo'); /// this is the first node in the linked list
        ll.insert('fuzz');
        ll.insert('buzz');
        expect(ll.includes('fuzz-buzz')).toBeFalsy()
    });

    it('Can properly return a collection of all the values that exist in the linked list', () => {
        ll.insert('foo'); /// this is the first node in the linked list
        ll.insert('fuzz');
        ll.insert('buzz');
        expect(ll.toString()).toMatch("foo -> fuzz -> buzz -> NULL")
    });

    it('can insert a node before a node located in the middle of a liked list', () => {
        ll.insert('foo');
        ll.insert('fuzz');
        ll.insert('buzz');
        ll.insertBefore('fuzz', 'newValue')
        expect(ll.toString()).toMatch(' foo -> newValue -> fuzz -> buzz -> NULL')
    })

    it('can insert a node before the first node of a liked list', () => {
        ll.insert('foo');
        ll.insert('fuzz');
        ll.insert('buzz');
        ll.insertBefore('foo', 'newValue')
        expect(ll.toString()).toMatch('newValue -> foo -> fuzz -> buzz -> NULL')
    })

    it('can insert a node after a node located in the middle of a liked list', () => {
        ll.insert('foo');
        ll.insert('fuzz');
        ll.insert('buzz');
        ll.insertAfter('fuzz', 'newValue')
        expect(ll.toString()).toMatch(' foo -> fuzz -> newValue -> buzz -> NULL')
    })

    it('can insert a node after a node located at the last node of a liked list', () => {
        ll.insert('foo');
        ll.insert('fuzz');
        ll.insert('buzz');
        ll.insertAfter('buzz', 'newValue')
        expect(ll.toString()).toMatch(' foo -> fuzz -> buzz -> newValue -> NULL')
    })

    it('tests where k is greater than the length of the linked list ', () => {
        ll.insert(1); 
        ll.insert(2);
        ll.insert(3);
        ll.insert(4);
        ll.insert(5); 

        expect(ll.kthFromEnd(7)).toMatch("exception")
    });

    it('tests where k and the length of the list are the same', () => {
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        ll.insert('d');
        ll.insert('f'); 

        expect(ll.kthFromEnd(5)).toMatch("exception")
    });

    it('tests where k is not a positive integer ', () => {
        ll.insert('ss');
        ll.insert('dd');
        ll.insert('ff');
        ll.insert('gg');
        ll.insert('rr'); 

        expect(ll.kthFromEnd(-3)).toMatch("exception")
    })

    it('tests where the linked list is of a size 1', () => {
        ll.insert('rr'); 

        expect(ll.kthFromEnd(1)).toMatch("exception")
    });

    it('tests where k is not at the end, but somewhere in the middle of the linked list', () => {
        ll.insert('ss');
        ll.insert('dd');
        ll.insert('ff');
        ll.insert('gg');
        ll.insert('rr'); 

        expect(ll.kthFromEnd(2)).toMatch("ff")
    })



})