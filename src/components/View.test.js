import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
import articleService from './../services/articleServices';

jest.mock('./../services/articleServices');

const emptyArticles = []

const testArticles = [
    {
        id: 'aMqwd1', 
        headline: "headline1", 
        createdOn: '2021-08-09T18:02:38-04:00',
        author: 'Ryan1',
        image: '',
        summary: "summary1",
        body: "Bleh1"    
    },
    {
        id: 'aMqwd2', 
        headline: "headline2", 
        createdOn: '2021-08-09T18:02:38-04:00',
        author: 'Ryan2',
        image: '',
        summary: "summary2",
        body: "Bleh2"    
    },
    {
        id: 'aMqwd3', 
        headline: "headline3", 
        createdOn: '2021-08-09T18:02:38-04:00',
        author: 'Ryan3',
        image: '',
        summary: "summary3",
        body: "Bleh3"    
    }
]

test("renders zero articles without errors", async () => {

    articleService.mockResolvedValueOnce(emptyArticles)

    render(<View />)
});

test("renders three articles without errors", async ()=> {

    articleService.mockResolvedValueOnce(testArticles)

    render(<View />)

    await waitFor(() => {
        const article = screen.queryAllByTestId("article");
        expect(article).toHaveLength(3);
    })
    
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.