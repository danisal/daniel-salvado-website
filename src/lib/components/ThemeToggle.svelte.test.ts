import { cleanup, fireEvent, render, screen } from '@testing-library/svelte';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ThemeToggle from './ThemeToggle.svelte';

beforeEach(() => {
	document.documentElement.classList.remove('dark');
	localStorage.clear();
	window.matchMedia = vi.fn().mockImplementation((query: string) => ({
		matches: false,
		media: query,
		onchange: null,
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn()
	})) as unknown as typeof window.matchMedia;
});

afterEach(() => {
	cleanup();
});

describe('ThemeToggle', () => {
	it('defaults to light mode', () => {
		render(ThemeToggle);

		expect(screen.getByRole('button', { name: 'Switch to dark mode' })).toBeInTheDocument();
	});

	it('switches to dark mode on click and persists the choice', async () => {
		render(ThemeToggle);
		const button = screen.getByRole('button', { name: 'Switch to dark mode' });

		await fireEvent.click(button);

		expect(document.documentElement.classList.contains('dark')).toBe(true);
		expect(localStorage.getItem('theme')).toBe('dark');
		expect(screen.getByRole('button', { name: 'Switch to light mode' })).toBeInTheDocument();
	});

	it('switches back to light mode on a second click', async () => {
		render(ThemeToggle);
		const button = screen.getByRole('button', { name: 'Switch to dark mode' });

		await fireEvent.click(button);
		await fireEvent.click(screen.getByRole('button', { name: 'Switch to light mode' }));

		expect(document.documentElement.classList.contains('dark')).toBe(false);
		expect(localStorage.getItem('theme')).toBe('light');
	});
});
