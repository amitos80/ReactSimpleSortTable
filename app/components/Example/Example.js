import React from 'react';
import { Table, TBody, Td, Th, THead, Tr } from '../../../src/ReactSimpleSortTable';

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [
            { name: 'Jack', age: 20, country: 'United State', instrument: 'Bass' },
            { name: 'John', age: 36, country: 'Ireland', instrument: 'Guitar' },
            { name: 'Joe', age: 25, country: 'South Africa', instrument: 'Trombone' },
            { name: 'Jeremy', age: 28, country: 'Canada', instrument: 'Ukulele' }
          ]
        }
    }

    render() {
        const { items } = this.state;

        return (
          <Table>
              <THead>
                  <Tr>
                    <Th sortKey="name">
                      <span>name</span>
                    </Th>
                    <Th sortKey="age">
                      <span>age</span>
                    </Th>
                    <Th sortKey="country">
                      <span>country</span>
                    </Th>
                    <Th sortKey="instrument">
                      <span>instrument</span>
                    </Th>
                  </Tr>
              </THead>
              <TBody>
              {items.map((item, index) =>
                (<Tr key={index} data={item}>
                    <Td>
                        <span>{item.name}</span>
                    </Td>
                    <Td>
                        <span>{item.age}</span>
                    </Td>
                    <Td>
                        <span>{item.country}</span>
                    </Td>
                    <Td>
                        <span>{item.instrument}</span>
                    </Td>
                </Tr>)
              )}
              </TBody>
          </Table>
        );
    }
}
