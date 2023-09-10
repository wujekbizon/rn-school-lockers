import {Rumor} from './lockersState';

export type RumorFormProps = {
  onSubmit: (credentials: {title: string; content: string}) => void;
  credentialsInvalid: {
    title: boolean;
    content: boolean;
  };
};

export interface RumorResponseInterface {
  rumor: Rumor;
  message: string;
}
