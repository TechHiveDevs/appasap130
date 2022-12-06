
import { 
  Create,
  SimpleForm,
  
TextInput,
required,
BooleanInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateTask(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="description" variant="outlined"   />
<BooleanInput source="isurgent" variant="outlined" validate={required()} />
<ReferenceInput label="organization" source="organizationid" reference="organization">
        <AutocompleteInput variant="outlined" /* optionText="organization"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
