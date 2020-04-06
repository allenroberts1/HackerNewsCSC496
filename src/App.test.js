import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App, { Search, Button, Table } from './App';


Enzyme.configure({ adapter: new Adapter() });


describe('App', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <App />
        );
            const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });


});

describe('Search', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Search>Search</Search>, div);
                        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <Search>Search</Search>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    

});

describe('Button', () => {


    it('renders', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Button>Give Me More</Button>, div);
                        });
        test('snapshots', () => {
            const component = renderer.create(
                <Button>Give Me More</Button>
            );
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });


    });

    describe('Table', () => {

        const props = {
            list: [
                { title: 'Foo', author: '1', num_comments: 1, points: 2, objectID: 'y' },
                { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z' },
            ],
        };

        it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<Table { ...props } />, div);
                            });

            test('has a valid snapshot', () => {
                const component = renderer.create(
                    <Table { ...props } />
                );
                const tree = component.toJSON();
                expect(tree).toMatchSnapshot();
            });

            it('shows two items in list', () => {
                const element = shallow(
                    <Table { ...props } />
                );

                expect(element.find('.table-row').length).toBe(2);
            });
        });



