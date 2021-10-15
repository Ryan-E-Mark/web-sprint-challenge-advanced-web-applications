import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const testArticle = {
    id: 'aMqwd', 
    headline: "headline", 
    createdOn: '2021-08-09T18:02:38-04:00',
    author: 'Ryan',
    image: '',
    summary: "summary",
    body: "Bleh"    
}

const testArticle2 = {
    id: 'aMqwd', 
    headline: "headline", 
    createdOn: '2021-08-09T18:02:38-04:00',
    author: '',
    image: '',
    summary: "summary",
    body: "Bleh"  
}

test('renders component without errors', ()=> {
    render(<Article article={testArticle}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle} />)

    const headline = screen.queryByTestId(/headline/i);
    const author = screen.queryByTestId(/author/i);

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();

    expect(headline).toHaveTextContent(/headline/i);
    expect(author).toHaveTextContent(/by ryan/i);
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={testArticle2} />)

    const author = screen.queryByTestId(/author/i);

    expect(author).toBeInTheDocument();
    expect(author).toHaveTextContent(/by Associated Press/i);
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const handleDeleteMock = jest.fn();

    render(<Article article={testArticle2} handleDelete={handleDeleteMock}/>)

    const deleteBtn = screen.queryByTestId(/deleteButton/i);
    userEvent.click(deleteBtn);

    expect(handleDeleteMock).toBeCalledTimes(1);
});

//Task List:
//1. Complete all above tests. Create test article data when needed.