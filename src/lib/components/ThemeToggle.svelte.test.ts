import { cleanup, fireEvent, render, screen } from '@testing-library/svelte';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ThemeToggle from './ThemeToggle.svelte';

// jsdom's own localStorage collides with Node's built-in Web Storage global on
// newer Node versions (undefined at test time), so we stub it explicitly
// instead of relying on the ambient global — deterministic on every Node version.
function createLocalStorageMock() {
	let store: Record<string, string> = {};
	return {
		getItem: (key: string) => (key in store ? store[key] : null),
		setItem: (key: string, value: string) => {
			store[key] = value;
		},
		removeItem: (key: string) => {
			delete store[key];
		},
		clear: () => {
			store = {};
		}
	};
}

beforeEach(() => {
	document.documentElement.classList.remove('dark');
	vi.stubGlobal('localStorage', createLocalStorageMock());
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
	vi.unstubAllGlobals();
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
