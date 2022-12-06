
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
BooleanField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowTask(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="description" />
<BooleanField source="isurgent" />
<ReferenceField source="organizationid" reference="organization" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}