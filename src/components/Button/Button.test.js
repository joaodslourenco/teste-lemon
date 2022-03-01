import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '.'

describe('Button component is', () => {
  test('rendered when receives text as children', () => {
    render(<Button>Testing</Button>)
    const buttonRendered = screen.getByRole('button')
    expect(buttonRendered).toBeInTheDocument()
  })

  test('NOT rendered when doesnt have text as children', () => {
    render(<Button />)
    const buttonRendered = screen.queryByRole('button')
    expect(buttonRendered).not.toBeInTheDocument()
  })
})

describe('Button component color props', () => {
  test('when is not declared, renders as "primary" by default', () => {
    render(<Button>Testing</Button>)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveAttribute('color', 'primary')
  })

  test('receives "primary" as color scheme', () => {
    render(<Button color="primary">Testing</Button>)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveAttribute('color', 'primary')
  })

  test('receives "secondary" as color scheme', () => {
    render(<Button color="secondary">Testing</Button>)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveAttribute('color', 'secondary')
  })
})

describe('Button component icon props', () => {
  test('is not declared. Renders text without Icon', () => {
    render(<Button>Testing</Button>)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).not.toHaveAttribute('icon')
  })

  test('"none" is declared. Renders text without Icon', () => {
    render(<Button icon="none">Testing</Button>)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).not.toHaveAttribute('icon')
  })

  test('"arrow-right "is declared. Renders text with Arrow-Right icon', () => {
    render(<Button icon="arrow-right">Testing</Button>)
    const buttonElement = screen.getByRole('button')
    const icon = within(buttonElement).getByTitle('arrow-right')
    expect(icon).toBeInTheDocument()
  })

  test('"check "is declared. Renders text with Check icon', () => {
    render(<Button icon="check">Testing</Button>)
    const buttonElement = screen.getByRole('button')
    const icon = within(buttonElement).getByTitle('check')
    expect(icon).toBeInTheDocument()
  })

  test('"refresh "is declared. Renders text with Refresh icon', () => {
    render(<Button icon="refresh">Testing</Button>)
    const buttonElement = screen.getByRole('button')
    const icon = within(buttonElement).getByTitle('refresh')
    expect(icon).toBeInTheDocument()
  })
})

describe('Button component "disabled" prop', () => {
  test('is true', () => {
    render(<Button disabled>Testing</Button>)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveAttribute('disabled')
  })

  test('is false', () => {
    render(<Button>Testing</Button>)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).not.toHaveAttribute('disabled')
  })
})

describe('Button component "onClick" prop', () => {
  test('runs a function when clicked', () => {
    const clickHandler = jest.fn()
    render(<Button onClick={clickHandler}>Testing</Button>)
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)
    expect(clickHandler).toHaveBeenCalled()
  })

  test('doesnt run a function when clicked, when Button is disabled', () => {
    const clickHandler = jest.fn()
    render(
      <Button onClick={clickHandler} disabled>
        Testing
      </Button>
    )
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)
    expect(clickHandler).not.toHaveBeenCalled()
  })
})
