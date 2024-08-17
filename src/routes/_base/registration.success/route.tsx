import { createFileRoute, notFound } from '@tanstack/react-router';
import { z } from 'zod';
import CryptoJS from 'crypto-js';
import { RegistrationResponse } from '@/features/registarion-feature';

const registerSuccessPageSearchParams = z.object({
  __ref: z.string(),
});

export const Route = createFileRoute('/_base/registration/success')({
  validateSearch: searchObj => registerSuccessPageSearchParams.parse(searchObj),

  preSearchFilters: [(search) => ({ ...search })],

  beforeLoad: ({ search }) => {
    try {
      const decoded = JSON.parse(
        CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(search.__ref))
      );

      if (!decoded.name) {
        throw new Error('Something wrong');
      }
    } catch (error) {
      throw notFound();
    }
  },

  loaderDeps: (opts) => ({
    ...opts.search,
  }),

  loader: async (opts) => {
    try {
      const data : RegistrationResponse = JSON.parse(
        CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(opts.deps.__ref))
      );
      return data;
    } catch (error) {
      throw new Error('Failed to load data');
    }
  }
});
