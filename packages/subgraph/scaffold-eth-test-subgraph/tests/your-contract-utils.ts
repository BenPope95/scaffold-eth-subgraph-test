import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  GreetingChange,
  SendMessage
} from "../generated/YourContract/YourContract"

export function createGreetingChangeEvent(
  greetingSetter: Address,
  newGreeting: string,
  premium: boolean,
  value: BigInt
): GreetingChange {
  let greetingChangeEvent = changetype<GreetingChange>(newMockEvent())

  greetingChangeEvent.parameters = new Array()

  greetingChangeEvent.parameters.push(
    new ethereum.EventParam(
      "greetingSetter",
      ethereum.Value.fromAddress(greetingSetter)
    )
  )
  greetingChangeEvent.parameters.push(
    new ethereum.EventParam(
      "newGreeting",
      ethereum.Value.fromString(newGreeting)
    )
  )
  greetingChangeEvent.parameters.push(
    new ethereum.EventParam("premium", ethereum.Value.fromBoolean(premium))
  )
  greetingChangeEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return greetingChangeEvent
}

export function createSendMessageEvent(
  _from: Address,
  _to: Address,
  message: string
): SendMessage {
  let sendMessageEvent = changetype<SendMessage>(newMockEvent())

  sendMessageEvent.parameters = new Array()

  sendMessageEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  sendMessageEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  sendMessageEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )

  return sendMessageEvent
}
