import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { ExpRadioChoiceCard } from "./ui/exp-radio";
import { RadioGroupChoiceCard } from "./ui/radio-group";
import { SelectRole } from "./ui/select-role";


export default function RoleDetails() {

    return (
        <div className="w-full px-4">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend className="font-semibold">Role Details</FieldLegend>
            <FieldDescription>
              Enter role details for the interview.
            </FieldDescription>
            <FieldGroup>
              <Field className="w-full max-w-md">
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Select Role
                </FieldLabel>
                <SelectRole />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  What type of interview should this be?
                </FieldLabel>
                <RadioGroupChoiceCard />
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  Select your experience level
                </FieldLabel>
                <ExpRadioChoiceCard />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
    )
}