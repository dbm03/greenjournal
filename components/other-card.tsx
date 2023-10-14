import {Card, CardHeader, CardBody, CardFooter, Divider, Input, Checkbox, Spacer, Select, SelectItem, Button} from "@nextui-org/react";

const Card4 = () => {
    return(
      <div className="px-2 py-4 w-full min-w-[375px]">
      <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
          <p className="text-small text-default-500">Lifestyle</p>
          <Checkbox>I am vegetarian.</Checkbox>
          <Checkbox>I use a low flow showerhead.</Checkbox>
          <Checkbox>I volunteer for environmental projects.</Checkbox>
          <p className="text-small text-default-500"><em>(i.e. conservation efforts, planting trees)</em></p>
          <Spacer/>
          <p className="text-small text-default-500">Shopping Habits</p>
          <Select className="max-w-xs" label="I shop for non-essential products..." defaultSelectedKeys={["sometimes"]}>
            <SelectItem key="rarely">Rarely</SelectItem>
            <SelectItem key="sometimes">Sometimes</SelectItem>
            <SelectItem key="often">Often</SelectItem>
          </Select>
          <Checkbox>I frequently buy recycled/reused products.</Checkbox>
          <Checkbox>I buy organic, locally-sourced produce.</Checkbox>
          <Spacer/>
          
          </div>
          <Button color="primary">Save Changes</Button>
          </div>
        </div>
    )
}
export default Card4;