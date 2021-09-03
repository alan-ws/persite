import create, { SetState } from "zustand";
import { useQuery } from "graphql-hooks";
import { persist } from "zustand/middleware";

export namespace BlogStore {
  export const blogQuery = `{
    blogMdnCollection {
      items {
        title
        body {
          json
        }
      }
    }
  }`;

  type NodeType = "paragraph" | "text";
  type Marks = "code";
  type Content = {
    nodeType: NodeType;
    content: ChildContent[];
    data: {};
  };

  type ChildContent = {
    nodeType: NodeType;
    value: string;
    marks: { type: Marks }[];
    data: {};
  };

  export type Blog = {
    title: string;
    body: Content[];
  };

  export type Body = {
    json: {
      content: Content[];
    };
  };

  export type BlogResponse = {
    title: string;
    body: Body;
  };

  export interface IStore {
    blogs: Blog[];
    loading: boolean;
    error: boolean;
    fetchBlogs: () => void;
    setBlogs: (blogs: BlogResponse[] | undefined) => void;
  }

  const initialState = {
    blogs: [],
    loading: false,
    error: false,
  };

  const queries = (set: SetState<IStore>) => {
    return {
      fetchBlogs: () => {},
    };
  };

  const mutations = (set: SetState<IStore>) => {
    return {
      setBlogs: (blogs: BlogResponse[] | undefined) =>
        set((state) => {
          state.blogs = blogs!.map((value: BlogResponse, index: number) => {
            return {
              title: value.title,
              body: value.body.json.content,
            };
          });
        }),
    };
  };

  export const useStore = create<IStore>((set, get) => ({
    ...initialState,
    ...queries(set),
    ...mutations(set),
  }));
}

export namespace ModalStore {
  interface IStore {
    isOpen: boolean;
    triggerModal: () => void;
  }

  const initialState = {
    isOpen: false,
  };

  function mutations(set: SetState<IStore>) {
    return {
      triggerModal: () => set((state) => ({ isOpen: !state.isOpen })),
    };
  }

  export const useStore = create<IStore>((set) => ({
    ...initialState,
    ...mutations(set),
  }));
}
