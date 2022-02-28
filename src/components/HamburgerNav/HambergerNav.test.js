import React from "react";
import enzyme,{ mount, shallow } from "enzyme";
import HamburgerNav from "./HamburgerNav";



describe("HamburgerNav toggling functionality",() =>{
    test("toggle off ",() => {
        const testData = {toggled:false,classes:"",controls:"",fn:fn=>fn}
        const wrapper = shallow(<HamburgerNav {...testData} />);
        const btn = wrapper.find("button");

        expect(btn.length).toBe(1);
        expect(btn.hasClass("hamburger-nav--active")).toEqual(false);
        expect(wrapper.find("span").length).toBe(1);

    })

    test("toggle on",() => {
        const testData = {toggled:true,classes:"test1",controls:"",fn:fn=>fn}
        const wrapper = shallow(<HamburgerNav {...testData} />);
        const btn = wrapper.find("button");

        expect(btn.hasClass("hamburger-nav--active")).toEqual(true);
        expect(btn.hasClass("test1")).toEqual(true);
    })

    test("clicking the button",()=> {
        const mock = jest.fn();
        mock.mockReturnValue(true)
        const wrapper = shallow(<HamburgerNav handleClick={mock}/>)
        wrapper.simulate("click");
        expect(mock).toHaveBeenCalledTimes(1);
    })

});