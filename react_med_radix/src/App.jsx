import {
  Flex,
  Text,
  Box,
  Tabs,
  Card,
  Avatar,
  Popover,
  Table,
  Button,
  TextArea,
  Checkbox,
  DropdownMenu,
  Dialog,
  TextField,
  ThemePanel,
  Grid,
  Heading,
  Container,
} from "@radix-ui/themes";
import { Overview } from "./Overview";

import "./app.css";

export default function App() {
  return (
    <>
      {/*#######################Navigation############################*/}
      <Tabs.Root defaultValue="dashboardTabs">
        <Tabs.List>
          <Tabs.Trigger value="mailTab">Mail</Tabs.Trigger>
          <Tabs.Trigger value="dashboardTabs">Dashboard</Tabs.Trigger>
          <Tabs.Trigger value="cardsTabs">Cards</Tabs.Trigger>
          <Tabs.Trigger value="tasksTabs">Tasks</Tabs.Trigger>
          <Tabs.Trigger value="playgroundTabs">Playground</Tabs.Trigger>
          <Tabs.Trigger value="formsTabs">Forms</Tabs.Trigger>
          <Tabs.Trigger value="musicTabs">Music</Tabs.Trigger>
          <Tabs.Trigger value="authTabs">Auth</Tabs.Trigger>
        </Tabs.List>

        <Box px="4" pt="3" pb="2">
          <Tabs.Content value="mailTab">
            <Text size="2">
              här skulle din mejl vara, men budjeten var för låg.
            </Text>
          </Tabs.Content>

          <Tabs.Content value="dashboardTabs">
            <Text size="2">Här är din Dashboard.</Text>
          </Tabs.Content>

          <Tabs.Content value="cardsTabs">
            <Text size="2">The cards are a lie!</Text>
          </Tabs.Content>

          <Tabs.Content value="tasksTabs">
            <Text size="2">Task? vilken task?</Text>
          </Tabs.Content>

          <Tabs.Content value="playgroundTabs">
            <Text size="2">Yeay playground :D</Text>
          </Tabs.Content>

          <Tabs.Content value="formsTabs">
            <Text size="2">forms deez nutz</Text>
          </Tabs.Content>

          <Tabs.Content value="musicTabs">
            <Text size="2">
              Ooga-chaka ooga-ooga <br />
              Ooga-chaka ooga-ooga <br />
              Ooga-chaka ooga-ooga <br />
              Ooga-chaka ooga-ooga
              <br />I can't stop this feeling Deep inside of me <br />
              Girl, you just don't realize What you do to me <br />
              When you hold me In your arms so tight <br />
              You let me know Everything's all right <br />
              I'm hooked on a feeling <br />
              I'm high on believing <br />
              That you're in love with me <br />
              Lips as sweet as candy Its taste is on my mind <br />
              Girl, you got me thirsty For another cup of wine <br />
              Got a bug from you, girl But I don't need no cure <br />I just
              stay a victim If I can for sure <br />
              All the good love when we're all alone <br />
              Keep it up, girl Yeah, you turn me on <br />
              I'm hooked on a feeling <br />
              I'm high on believing <br />
              That you're in love with me <br />
              All the good love When we're all alone <br />
              Keep it up, girl Yeah, you turn me on <br />
              I'm hooked on a feeling <br />
              I'm high on believing <br />
              That you're in love with me <br />
              I'm hooked on a feeling <br />
              And I'm high on believing <br />
              That you're in love with me <br />I said I'm hooked on a feeling
              <br />
              And I'm high on believing <br />
              That you're in love with me
            </Text>
          </Tabs.Content>

          <Tabs.Content value="authTabs">
            <Text size="2">Authstralien</Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
      {/*#######################Navigation############################*/}

      {/*#########################Container###########################*/}
      <Card>
        <Flex p="1" direction="column" gap="5">
          {/*####################Dashboard#########################################*/}
          <Flex gap="3" height="6">
            {/*####################Dropdown meny 2 #########################*/}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button
                  className="trigger"
                  radius="medium"
                  variant="soft"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="src\assets\avatar\personal.png"
                    alt="Avatar"
                    style={{
                      borderRadius: "100%",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  Alicia Koch
                </Button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Content>
                <DropdownMenu.Item>
                  <Flex direction="column">
                    <TextField.Root>
                      <TextField.Slot>Q</TextField.Slot>
                      <TextField.Input placeholder="Search…" />
                    </TextField.Root>
                  </Flex>
                </DropdownMenu.Item>

                <DropdownMenu.Separator />
                <DropdownMenu.Item shortcut="^ ⌘ P">Profile</DropdownMenu.Item>
                <DropdownMenu.Item shortcut=" ⌘ B">Billing</DropdownMenu.Item>
                <DropdownMenu.Item shortcut=" ⌘ S">Settings</DropdownMenu.Item>
                <DropdownMenu.Item>New Team</DropdownMenu.Item>
                <DropdownMenu.Separator />

                <DropdownMenu.Item shortcut="^ ⌘ Q">Log out</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
            {/*####################Dropdown meny 2 #########################*/}

            {/*##########################Sökruta############################*/}
            {/*Jag vill nånting som space-between men lyckas inte få det att fungarea
            nu måste jag använda margin i css vilket är äkligt och gör mig arg*/}
            {/* <Flex width="100%"> */}
            <Tabs.Root defaultValue="overviewTabs">
              <Tabs.List className="navigering">
                <Tabs.Trigger value="accountTabs">Overview</Tabs.Trigger>
                <Tabs.Trigger value="analyticsTabs">Analytics</Tabs.Trigger>
                <Tabs.Trigger value="reportsTabs">Reports</Tabs.Trigger>
                <Tabs.Trigger value="notificationsTabs">
                  Notifications
                </Tabs.Trigger>
              </Tabs.List>
            </Tabs.Root>

            {/* <Flex width="100%"> */}
            <TextField.Root>
              <TextField.Slot>Q</TextField.Slot>
              <TextField.Input placeholder="Search…" />
            </TextField.Root>
            {/* </Flex> */}

            {/*##########################Sökruta############################*/}

            {/*####################Dropdown meny 1 #########################*/}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button
                  className="trigger"
                  radius="full"
                  variant="ghost"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="src\assets\avatar\01.png"
                    alt="Avatar"
                    style={{
                      borderRadius: "100%",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </Button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Content>
                <DropdownMenu.Item>
                  <Flex direction="column">
                    <Text weight="bold">shadcn</Text>
                    <Text weight="light" size="1">
                      m@exmple.com
                    </Text>
                  </Flex>
                </DropdownMenu.Item>

                <DropdownMenu.Separator />
                <DropdownMenu.Item shortcut="^ ⌘ P">Profile</DropdownMenu.Item>
                <DropdownMenu.Item shortcut=" ⌘ B">Billing</DropdownMenu.Item>
                <DropdownMenu.Item shortcut=" ⌘ S">Settings</DropdownMenu.Item>
                <DropdownMenu.Item>New Team</DropdownMenu.Item>
                <DropdownMenu.Separator />

                <DropdownMenu.Item shortcut="^ ⌘ Q">Log out</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
            {/* </Flex> */}
          </Flex>
          {/*####################Dropdown meny 1 #########################*/}

          {/*###########################Rubrik###########################*/}
          <Box width="10" height="5">
            <Heading>Dashboard</Heading>
          </Box>
          {/*###########################Rubrik###########################*/}

          {/*#########################Overview###########################*/}
          <Tabs.Root defaultValue="overviewTabs">
            <Tabs.List className="test">
              <Tabs.Trigger value="accountTabs">Overview</Tabs.Trigger>
              <Tabs.Trigger value="analyticsTabs">Analytics</Tabs.Trigger>
              <Tabs.Trigger value="reportsTabs">Reports</Tabs.Trigger>
              <Tabs.Trigger value="notificationsTabs">
                Notifications
              </Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
          {/*#########################Overview###########################*/}
          {/*########################Dashboard###########################*/}

          {/*##########################Cards##############################*/}
          {/*Ville förska göra sidan responsive men det fungerar inte... */}
          <Flex /* columns="2" */ gap="3">
            {/*####################Total Revenue##########################*/}
            <Card size="1" style={{ width: 350 }}>
              <Flex p="3" gap="3" align="center" direction="column">
                <Flex width="100%" direction="row" justify="between">
                  <Text size="2" weight="bold">
                    Total Revenue
                  </Text>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="dollorsign"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </Flex>
                <Flex width="100%" align="start" direction="column">
                  <Text weight="bold" size="6">
                    $45,231.89
                  </Text>
                  <Text weight="" size="2" color="gray">
                    +20.1% from last month
                  </Text>
                </Flex>
              </Flex>
            </Card>
            {/*####################Total Revenue##########################*/}

            {/*####################Subscriptions##########################*/}
            <Card size="1" style={{ width: 350 }}>
              <Flex p="3" gap="3" align="center" direction="column">
                <Flex width="100%" direction="row" justify="between">
                  <Text size="2" weight="bold">
                    Subscriptions
                  </Text>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="twoDudes"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </Flex>
                <Flex width="100%" align="start" direction="column">
                  <Text weight="bold" size="6">
                    +2350
                  </Text>
                  <Text weight="" size="2" color="gray">
                    +180.1% from last month
                  </Text>
                </Flex>
              </Flex>
            </Card>
            {/*####################Subscriptions##########################*/}

            {/*##########################Sales############################*/}
            <Card size="1" style={{ width: 350 }}>
              <Flex p="3" gap="3" align="center" direction="column">
                <Flex width="100%" direction="row" justify="between">
                  <Text size="2" weight="bold">
                    Sales
                  </Text>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="credCard"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </Flex>
                <Flex width="100%" align="start" direction="column">
                  <Text weight="bold" size="6">
                    +12,234
                  </Text>
                  <Text weight="" size="2" color="gray">
                    +19% from last month
                  </Text>
                </Flex>
              </Flex>
            </Card>
            {/*##########################Sales############################*/}

            {/*########################Active Now#########################*/}
            <Card size="1" style={{ width: 350 }}>
              <Flex p="3" gap="3" align="center" direction="column">
                <Flex width="100%" direction="row" justify="between">
                  <Text size="2" weight="bold">
                    Active Now
                  </Text>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="ekgWave"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </Flex>
                <Flex width="100%" align="start" direction="column">
                  <Text weight="bold" size="6">
                    +573
                  </Text>
                  <Text weight="" size="2" color="gray">
                    +201 since last hour
                  </Text>
                </Flex>
              </Flex>
            </Card>
            {/*########################Active Now#########################*/}
          </Flex>
          {/*##########################Cards##############################*/}

          {/*########################Overview##############################*/}
          <Flex className="responsivOverview" gap="3">
            {/* <Container className="diagram"> */}
            <Card className="chartCard">
              <Flex className="chart" gap="4" p="5">
                <Overview />
              </Flex>
            </Card>
            {/*########################Overview##############################*/}

            {/*########################Recent Sales#########################*/}
            <Card p="4">
              <Flex width="100%" p="4" direction="column">
                <Heading size="3">Recent Sales</Heading>

                <Text size="2" color="gray">
                  You made 265 sales this month
                </Text>
              </Flex>

              <Table.Root>
                <Table.Body>
                  <Table.Row align="center">
                    <Table.RowHeaderCell>
                      <Flex gap="4">
                        <Avatar src="src\assets\avatar\01.png"></Avatar>
                        <Flex direction="column">
                          <Text size="2" weight="medium">
                            Olivia Martin
                          </Text>
                          <Text size="2" color="gray">
                            olivia.martin@email.com
                          </Text>
                        </Flex>
                      </Flex>
                    </Table.RowHeaderCell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell>
                      <Heading size="4" weight="medium">
                        +$1,999.00
                      </Heading>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row align="center">
                    <Table.RowHeaderCell>
                      <Flex gap="4">
                        <Avatar src="src\assets\avatar\02.png"></Avatar>
                        <Flex direction="column">
                          <Text size="2" weight="medium">
                            Jackson Lee
                          </Text>
                          <Text size="2" color="gray">
                            jackson.lee@email.com
                          </Text>
                        </Flex>
                      </Flex>
                    </Table.RowHeaderCell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell>
                      <Heading size="4" weight="medium">
                        +$39.00
                      </Heading>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row align="center">
                    <Table.RowHeaderCell>
                      <Flex gap="4">
                        <Avatar src="src\assets\avatar\03.png"></Avatar>
                        <Flex direction="column">
                          <Text size="2" weight="medium">
                            Isabella Nguyen
                          </Text>
                          <Text size="2" color="gray">
                            isabella.nguyen@email.com
                          </Text>
                        </Flex>
                      </Flex>
                    </Table.RowHeaderCell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell>
                      <Heading size="4" weight="medium">
                        +$299.00
                      </Heading>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row align="center">
                    <Table.RowHeaderCell>
                      <Flex gap="4">
                        <Avatar src="src\assets\avatar\04.png"></Avatar>
                        <Flex direction="column">
                          <Text size="2" weight="medium">
                            William Kim
                          </Text>
                          <Text size="2" color="gray">
                            william.kim@email.com
                          </Text>
                        </Flex>
                      </Flex>
                    </Table.RowHeaderCell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell>
                      <Heading size="4" weight="medium">
                        +$99.00
                      </Heading>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row align="center">
                    <Table.RowHeaderCell>
                      <Flex gap="4">
                        <Avatar src="src\assets\avatar\05.png"></Avatar>
                        <Flex direction="column">
                          <Text size="2" weight="medium">
                            Sofia Davis
                          </Text>
                          <Text size="2" color="gray">
                            sofia.davis@email.com
                          </Text>
                        </Flex>
                      </Flex>
                    </Table.RowHeaderCell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell>
                      <Heading size="4" weight="medium">
                        +$39.00
                      </Heading>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Card>
          </Flex>
          {/* </Container> */}
          {/*########################Recent Sales#########################*/}

          {/*#############################################################*/}
          {/* <Popover.Root>
            <Popover.Trigger>
              <Button variant="soft">Comment</Button>
            </Popover.Trigger>
            <Popover.Content style={{ width: 360 }}>
              <Flex gap="3">
                <Avatar
                  size="2"
                  src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                  fallback="A"
                  radius="full"
                />
                <Box grow="1">
                  <TextArea
                    placeholder="Write a comment…"
                    style={{ height: 80 }}
                  />
                  <Flex gap="3" mt="3" justify="between">
                    <Flex align="center" gap="2" asChild>
                      <Text as="label" size="2">
                        <Checkbox />
                        <Text>Send to group</Text>
                      </Text>
                    </Flex>

                    <Popover.Close>
                      <Button size="1">Comment</Button>
                    </Popover.Close>
                  </Flex>
                </Box>
              </Flex>
            </Popover.Content>
          </Popover.Root> */}
          {/*#############################################################*/}
        </Flex>
      </Card>
      {/*#########################Container###########################*/}
    </>
  );
}
