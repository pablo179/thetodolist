import { render, screen } from '@testing-library/react'
import Page from '../src/app/page'
import userEvent from '@testing-library/user-event'

describe('Page', () => {
  test('e2e', async () => {
    render(<Page />)
    // elements exists
    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()
    const form = screen.getByRole("form")
    expect(form).toBeDefined()
    const list = screen.getByRole('list')
    expect(list).toBeDefined()
    const submitButton = form.querySelector('button')
    expect(submitButton).toBeDefined()
    //add item
    await userEvent.type(input, 'wake up')
    expect(list.childNodes.length).toBe(0)
    await userEvent.click(submitButton!)
    expect(list.childNodes.length).toBe(1)
    const item = screen.getByText('wake up')
    expect(item).toBeDefined()
    //delete item
    const deleteButton = item.querySelector('button')
    await userEvent.click(deleteButton!);
    expect(list.childNodes.length).toBe(0)
  })
})