const INPUT_NAME = "UPDATE_NAME";


const INPUT_SURNAME = "INPUT_SURNAME";


const INPUT_AGE = "INPUT_AGE";

const INPUT_MORW = "INPUT_MORW";

// const INPUT_MORW = "INPUT_MORW";

const YES_NO='YES_NO';

const ALL_PERSONS='ALL_PERSONS'




export default function person(
  state = {
    name: "",
    surname:"",
    age: "",
    morw:"M",
    yesno:false,
  all_persons:[]

  },
  action
) {

  switch (action.type) {
    case INPUT_NAME: {
      return {
        ...state,
        name: action.payload
      };
    }
   

     case INPUT_SURNAME: {
      return {
        ...state,
        surname: action.payload
      };
    }


     case INPUT_AGE: {
      return {
        ...state,
        age: action.payload
      };
    }
    case INPUT_MORW: {
      return {
        ...state,
        morw: action.payload
      };
    }

     case YES_NO: {
      return {
        ...state,
        yesno: action.payload
      };
    }


    case ALL_PERSONS: {
      return {
        ...state,
        all_persons: action.payload
      };
    }


    default: {
      return state;
    }
  }
}

export const updateName = name => ({ type: INPUT_NAME, payload: name });
export const updateSurname = surname => ({ type: INPUT_SURNAME, payload: surname });
export const updateAge = age => ({ type: INPUT_AGE, payload: age });


export const updateMorW = morw => ({ type: INPUT_NAME, payload: morw });
export const updateYesNo = yesno => ({ type: INPUT_AGE, payload: yesno });

export const all_persons = all_persons => ({ type: ALL_PERSONS, payload: all_persons });
