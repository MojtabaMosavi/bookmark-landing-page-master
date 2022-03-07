import React from "react";
import {mount,shallow} from "enzyme";
import Hero from "./Hero";


describe("hero component",() => {
    test("renders correctly",() => {
        const wrapper = shallow(<Hero />);

        expect(wrapper.find("a").length).toBe(2);
        expect(wrapper.find("p").length).toBe(1);
        expect(wrapper.find("img").length).toBe(1);
    })
})