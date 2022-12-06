
import { 
  Edit,
  SimpleForm,
  
TextInput,
required,
BooleanInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditTask(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="description" variant="outlined"   />
<BooleanInput source="isurgent" variant="outlined" validate={required()} />
<ReferenceInput label="organization" source="organizationid" reference="organization">
        <AutocompleteInput variant="outlined" /* optionText="organization"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}