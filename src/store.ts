import create from "zustand";

type BlogState = {
  blogs: {
    title: string;
    body: any;
  }[];
};

interface IStore {
  blogs: {
    title: string;
    body: any;
  }[];
  setBlogs: (blogs: any) => void;
}

const mutators = {
  fetchBlogs: function* () {},
};

const getters = {
  getBlogs: () => {},
};

const setters = (set: any) => {
  return {
    setBlogs: (blogs: any) =>
      set((state: BlogState) => {
        state.blogs = blogs;
      }),
  };
};

export const useStore = create<IStore>((set) => ({
  blogs: [],
  ...getters,
  ...setters(set),
  ...mutators,
}));

export const useVlogStore = create<{ vlogs: [] }>((set) => ({
  vlogs: [],
}));

export const useModalStore = create<{ isOpen: boolean; triggerModal: () => void }>((set) => ({
  isOpen: false,
  triggerModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));
